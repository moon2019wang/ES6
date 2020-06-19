{
    let a,b,reset;
    [a,b]=[1,2];
    console.log(a,b);
}
{
    let metaData = {
        title:'abc',
        test:[{
            title:'test',
            desc:'description'
        }]
    }
    let {title:esTitle,test:[{title:cnTitle}]} = metaData;
    console.log(esTitle,cnTitle);
}