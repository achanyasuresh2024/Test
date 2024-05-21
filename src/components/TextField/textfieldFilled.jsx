import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CodeDisplay from '../rightSideSection/CodeDisplay';

const code = `
function TextFieldOutlined() {
    return (
        <>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
            <TextField id="filled-basic" label="Filled" variant="filled" />
            </Box>
            <CodeDisplay jsxCode={code} />
        </>
    );
  }

  export default TextFieldOutlined;
`;

function TextFieldFilled() {
    return (
        <>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
               <TextField id="filled-basic" label="Filled" variant="filled" />
            </Box>
            <CodeDisplay jsxCode={code} />
        </>
    );
}

export default TextFieldFilled;