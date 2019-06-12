const jobs = [
    {id: 1, title: "NodeJS Developer"},
    {id: 2, title: "ReactJS Developer"}
];

module.exports.handler = async (evt, ctx) => {
    // console.log(evt);
    // console.log(evt.body);
    jobs.push(JSON.parse(evt.body));
    // Goal is to add new job into existing 'list' of jobs
    return {
        statusCode: 200,
        body: JSON.stringify({
            jobs
        })
    };
};