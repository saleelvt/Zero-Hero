


        let obj={
            name:'slaeel',
            age:21,
            address:[
                {
                    street:245,
                    location:'valnchry '
                },
                {
                    street:231,
                    location:'valnchry '
                },
                {
                    street:291,
                    location:'valnchry '
                },
                {
                    street:271,
                    location:'valnchry '
                },

            ]
        }


    let sort=obj.address.sort((a,b)=> a.street -b.street )
        console.log(sort);


