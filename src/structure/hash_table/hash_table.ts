type HashArray<T> = [string, T]

export class HashTable<T> {
    data: HashArray<T>[][] = []

    constructor(size: number){
        this.data = new Array<HashArray<T>[]>(size);
    }
    
    private _hash(key: string): number {
        let hash = 0;

        for (var i = 0; i < key.length; i++) {
            const itemCharCode = key.charCodeAt(i) * i
            hash = (hash + itemCharCode) % this.data.length
        }

        return hash
    }

    set(key: string, value: T): void {
       const address = this._hash(key)
 
       if (!this.data[address]) {
            this.data[address] = [[key, value]]
       } else {
            this.data[address].push([key, value])
       } 
    }

    get(key: string): HashArray<T> | undefined {
       const address = this._hash(key)

        for (var i = 0; i < this.data[address].length; i++) {
            const item = this.data[address][i]
            const findKey = item[0]

            if (findKey === key) {
                return item
            }
        }

        return undefined
    }

    keys() {
        const keysArray: string[] = []

        for (var i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                if (this.data[i].length > 1) {
                    for (var j = 0; j < this.data[i].length; j++) {
                        keysArray.push(this.data[i][j][0])
                    }
                } else {
                    keysArray.push(this.data[i][0][0])
                }
            }
        }

        return keysArray
    }
}