const jobs = [
    {id: 1, title: "NodeJS Developer"},
    {id: 2, title: "ReactJS Developer"}
];

module.exports.handler = async (evt, ctx) => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            jobs
        })
    };
};