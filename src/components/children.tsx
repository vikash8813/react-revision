import React from 'react';

const styles = {
    active: {
        color: 'green',
        backgroundColor: 'lightgreen',
        padding: '10px',
    },
    inactive: {
        color: 'red',
        backgroundColor: 'lightcoral',
        padding: '10px',
    },
};

const Children = ({name, updateNumber}: { name: string, updateNumber: () => void }) => {
    const color = 'red'


    return (
        <>
            <style>

                {
                    `
                    .  .active {
            color: green;
            background-color: lightgreen;
            padding: 10px;
          }
                    `
                }
            </style>
            <div style={{color: color === 're' ? color : 'green'}}>
                {name} : this is a prop

                {color === 'red' ? 'conditional sentence true' : 'conditional sentence false'}

                <button
                    onClick={() => {
                        // testFunc()
                        updateNumber()
                    }}>
                    update count from emit
                </button>


            </div>
            <div className={false ? 'meraClass' : 'nyaClass'}>
                test classes
            </div>
        </>
    );
};

export default Children;