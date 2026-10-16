
exports.handler = async function (event, context) {
    return {
        statusCode: 200,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            message: "Hello! Welcome to Serverless Computing using Netlify Functions."
        })
    };
};
