const db = require('./con');

class classInfo {
    constructor (id,name,rank) {
        this.id = id;
        this.name = name;
        this.rank = rank;
    }
    //change below to grab status title and change method name 
static async getAllTopicData() {
    try {
        const response = await db.any(`SELECT * FROM topics;`);
        return response
    } catch (error) {
        console.error('ERROR', error);
        return error
    }
}
//change method name 
static async getAllStatuses() {
    try{
        const response = await db.any(`SELECT * from topics 
        INNER JOIN class_status ON topics.ranking = class_status.id
        ORDER BY topics.topic_name;`);
        return response

    } catch(error) {
        console.error('ERROR', error);
        return error
    }
}
static async getStatusInfo() {
    try {
        const response = await db.any(`SELECT * FROM class_status;`);
        return response
    } catch (error) {
        console.error('ERROR', error);
        return error
    }
}
}

module.exports = classInfo;