/* 
  Given an array of ailements (illnesses), and an array of medication objects that have a nested array of treatedSymptoms
  return the medication name(s) that treats the most given symptoms
*/

const medications = [{
        name: "Sulforaphane",
        treatableSymptoms: [
            "dementia",
            "alzheimer's",
            "cancer",
            "inflammation",
            "neuropathy",
        ],
    },
    {
        name: "Longvida Curcumin",
        treatableSymptoms: [
            "pain",
            "inflammation",
            "depression",
            "arthritis",
            "anxiety",
        ],
    },
    {
        name: "Hericium erinaceus",
        treatableSymptoms: ["anxiety", "cognitive decline", "depression"],
    },
    {
        name: "Nicotinamide mononucleotide",
        treatableSymptoms: [
            "ageing",
            "low NAD",
            "obesity",
            "mitochondrial myopathy",
            "diabetes",
        ],
    },
    {
        name: "PainAssassinator",
        treatableSymptoms: [
            "pain",
            "inflammation",
            "cramps",
            "headache",
            "toothache",
            "back pain",
            "fever",
        ],
    },
];

const ailments1 = ["pain"];
const expected1 = ["PainAssassinator", "Longvida Curcumin"];

const ailments2 = ["pain", "inflammation", "depression"];
const expected2 = ["Longvida Curcumin"];

const ailments3 = ["existential dread"];
const expected3 = [];

const ailments4 = [];
const expected4 = [];

// Time: O(n*m) where n is meds length and m is longest treatableSymptoms length
console.log(medFinder(ailments1, medications));
console.log(medFinder(ailments2, medications));
console.log(medFinder(ailments3, medications));
console.log(medFinder(ailments4, medications));
function medFinder(ailments, avaliableMed) {
    result = [];
    if(ailments.length==0){
        return result;
    }
    for (const medObjects of avaliableMed) { // med objects
            //checks if every element in the ailments passes the condition
            if (ailments.every(r => medObjects["treatableSymptoms"].includes(r))) {//every element in ailments is found in treatable symptoms
                result.push(medObjects["name"])
            }    

            for (let i = 0; i < medObjects["treatableSymptoms"].length; i++) {
                if (medObjects["treatableSymptoms"][i].includes(ailments[i])) {
                    
                }
                
            }
    }


    return result;
}
