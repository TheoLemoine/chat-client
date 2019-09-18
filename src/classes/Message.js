

export default class Message {

    constructor(user, content, createdAt = null) {
        this.user = user
        this.content = content
        this.createdAt = createdAt
    }
    
}