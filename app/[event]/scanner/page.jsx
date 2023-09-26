"use client"
import React, { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import axios from "axios";

const Scanner = ({ params }) => {
    console.log(params.event);
    const [results, setResults] = useState(null)
    const [option, setOption] = useState(0)
    // 0 - no results
    // 1 - authorised
    // 2 - not authorised
    const [success, setSuccess] = useState(null)
    const [message, setMessage] = useState(null)
    const handleContinue = async () => {
        try {
            const { data } = await axios.post(`/api/user/${params.event}`, { uid: results });
            setSuccess(data.success);
            setMessage(data.message);
            setOption(1);
        }
        catch (err) {
            setMessage(err.response.data.message)
            setSuccess(err.response.data.success);
            setOption(2);
        }
    }
    const renderScanner = () => {
        location.reload();
    }
    useEffect(() => {
        const scanner = new Html5QrcodeScanner("reader", {
            fps: 5,
        });
        scanner.render(onScanSuccess, onScanError);
        async function onScanSuccess(qrCodeMessage) {
            scanner.clear();
            console.log(qrCodeMessage);
            setResults(qrCodeMessage);
        }

        function onScanError(err) {
            console.warn(err);
        }
    }, []);
    return (
        <>
            <div className="h-screen flex items-center justify-center">
                {results ?
                    option == 0 ?
                        <div>
                            <div className="w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                                <div className="relative w-full max-w-md max-h-full">
                                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                                        <div className="p-6 text-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mx-auto mb-4 text-green-400 w-12 h-12 dark:text-green-600">
                                                <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                            </svg>

                                            <h3 className="mb-10 text-lg font-normal text-gray-100 dark:text-gray-100">{results}</h3>
                                            <button onClick={handleContinue} type="button" className="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                                                Continue
                                            </button>
                                            <button onClick={renderScanner} type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">Scan Again</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> : option == 1 ?
                            <div>
                                <div className="w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                                    <div className="relative w-full max-w-md max-h-full">
                                        <div className={"relative bg-white border-4 rounded-lg shadow border-gray-500"}>

                                            <div className="p-6 text-center">
                                                {success ?
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mx-auto mb-4 text-green-400 w-12 h-12 dark:text-green-600">
                                                        <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                                                    </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mx-auto mb-4 text-red-400 w-12 h-12 dark:text-red-600">
                                                        <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                                                    </svg>
                                                }
                                                <h3 className="mb-10 text-lg font-normal text-gray-800 dark:text-gray-800">{message}</h3>
                                                {success ? <button onClick={renderScanner} type="button" className="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                                                    Scan New
                                                </button> : <button onClick={renderScanner} type="button" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">Scan Again</button>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> :
                            <div>
                                <div className="w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                                    <div className="relative w-full max-w-md max-h-full">
                                        <div className="relative bg-red-700 rounded-lg shadow dark:bg-red-700">
                                            <div className="p-6 text-center">
                                                <h3 className="text-xl font-normal text-gray-100 dark:text-gray-100">{message}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    :
                    <div id="reader" className="md:w-1/2 w-[calc(100%-2rem)]"></div>
                }

            </div >
        </>
    );
};

export default Scanner;
