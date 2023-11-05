const a = 10;
{
    const a = 20;
    {
        // const a = 30;
        const c = 40;
        console.log(a); //30 for shadowing
    }
    console.log(a); //20 for shadowing
}
console.log(a); //10