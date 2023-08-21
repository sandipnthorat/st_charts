import React from 'react';
import { render } from "react-dom";
import TextInput from 'st_charts';
// import { TextInput } from "../lib"

const App = () => (
    <div style={{ width: 640, margin: "15px auto" }}>
        <h1>Hello Sandipan</h1>
        <TextInput label="Email Address" placeholder="sandipan@example.com" />
    </div>
);

render(<App />, document.getElementById("root"));


export default App;