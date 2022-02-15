const teaCards_seed = [
    {
        name:"Green Tea Boba",
        createdBy: {type: Schema.Types.ObjectId, ref: 'users'},
        description:"Great for those who like the pure flavour of tea but also like boba.",
        base: "620b2683d4912d8146ccc797",
        flavour:"620b253dd4912d8146ccc781",
        toppings:["620b250c18ed58c41d288639"],
        likes: 5,
        dateCreated: '2022-02-10',
    }
]