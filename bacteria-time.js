const bacteriaTime = (currentNum, targetNum) =>
{
    if (currentNum > targetNum) 
    {
        return 'targetNum must be larger than currentNum';
    }
    else
    {
        let doubleMin = 20;
        let growth = currentNum * 2;
        while (growth < targetNum)
        {
            growth *= 2;
            doubleMin += 20;
        }
        return doubleMin;
    }
}