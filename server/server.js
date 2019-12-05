const express = require('express')
// like, import express from 'express'
const app = express();
const port = process.env.PORT || 3002;

app.listen(port, () => {
    console.log(`server runing at ${port}`);

})