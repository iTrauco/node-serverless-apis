const jobs = [
    {id: 1, title: "NodeJS Developer"},
    {id: 2, title: "ReactJS Developer"}
];

module.exports.handler = async (evt, ctx) => {
    console.log(evt);
    const jobIndex = jobs.findIndex(j => j.id == evt.pathParameters.id);
    return {
        statusCode: 200,
        body: JSON.stringify({
            job: jobs[jobIndex]
        })
    };
};