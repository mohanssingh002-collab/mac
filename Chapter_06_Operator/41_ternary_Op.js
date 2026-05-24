let rajkumar_age = 18;
let rajkumar_goto_goa = rajkumar_age >= 18 ? "Rajkumar will go to goa" : "No goa";
console.log(rajkumar_goto_goa);

let actualResult = 200;
let expectedResult = 200;
let getResult = expectedResult === actualResult ? "Pass" : "Fail";
console.log(getResult);

let env = "PROD";
let baseEnv = env === "stagging" ? "https://www.pass.com" : "https://www.fail.com";
console.log(baseEnv);

let responseTime = 800;
let SLA = 1000;
let slaStatus = responseTime <= SLA ? "Within SLA" : "SLA Breached";
console.log(`Response: ${responseTime}ms - ${slaStatus}`);

// let rajkumar_age = 28;
// let rajkumar_goto_goa = rajkumar_age >= 18 ? (rajkumar_age > 26 ? "He will drink" : "No drink") : "No goa";
// console.log(rajkumar_goto_goa);

let temp = 2;
let feel = (temp >= 40) ? "very hot" :
    (temp >= 35) ? " hot" :
        (temp >= 20) ? "warm" :
            (temp >= 20) ? "Cool" : "Cold";

console.log("TEMPERATURE", temp, "| FEEL", feel);
