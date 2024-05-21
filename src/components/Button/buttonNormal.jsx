import React from "react";
import Button from '@mui/material/Button';
import './buttonNormal.css'
import CodeDisplay from "../rightSideSection/CodeDisplay";

const code = `
import React from 'react';
import Button from '@mui/material/Button';


const ButtonNormal = () => {
  return (
    <div>
    <Button variant="text">Button</Button>
    </div>
  );
};

export default ButtonNormal;
`;

function ButtonNormal() {
    return (

        <div>

            <div className="button-container">
                <Button variant="text">Button</Button>
            </div>
            <CodeDisplay jsxCode={code}/>
        </div>




    )
}

export default ButtonNormal;