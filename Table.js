class Table{
    constructor(arr){
        this.header = arr[0]
        arr.shift()
        this.rows = arr 
    }
    get Rowcount(){
        return this.rows.length
    }

    get Columncount(){
        return this.header.length
    }
}

module.exports = Table