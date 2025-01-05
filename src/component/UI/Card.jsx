import React from 'react';

const Cards = () => {
    return (
        <div className="max-w-sm mx-auto bg-slate-400 shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105">
            <div className="px-6 py-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{"title"}</h2>
                <p style={{color:"red"}} className="text-gray-600 text-base">{"description"}</p>
            </div>
            <div className="px-6 py-4 flex justify-between">
                <button 
                   // onClick={onEdit} 
                    className="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
                >
                    Edit
                </button>
                <button 
                   // onClick={onDelete} 
                    className="bg-red-500 text-white font-semibold px-4 py-2 rounded hover:bg-red-600 transition duration-200"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default Cards;