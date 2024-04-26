
/*
    monthly payment = (p x r)/n
*/ 


function getPayment (principalAmount, percentageRate, numberOfMonths){
    //p ((r (1+r )n)/ ((1+r )n - 1))
    r = percentageRate / 12;
    n = numberOfMonths;
    P = principalAmount;
    output = P * ((r*(1+r) ** n) / ((1+r) ** n - 1));
    return output;
};

result = getPayment();
console.log(result);
