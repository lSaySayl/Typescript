(()=> {

    interface Client {
        name:string;
        age?:number;
        address:Address;
        getFullAddress(id:string):string;
    }

    interface Address {
        id:number;
        zip:string;
        city:string;
    }

    const client:Client = {
        name: "Bruce",
        age: 45,
        address: {
            city: "Gotham",
            id: 123,
            zip: "123456"
        },
        getFullAddress(id: string){
            return this.address.city + " " + this.address.zip + " " + id;
        }
    }

    console.log(client.getFullAddress("10"))

})();