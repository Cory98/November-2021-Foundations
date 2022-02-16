var sum = 0;
for (var x = 0; x < 1000; x++)
{
    if (x % 2 === 0 || x % 6 === 0)
    {
        sum += x;
    }
}
console.log(sum);