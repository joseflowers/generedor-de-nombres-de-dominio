const pronoun = ['el', 'los'];
const adj = ['agua', 'mesa'];
const noun = ['animales', 'djs'];
const domains = ['.cl', '.com'];


pronoun.forEach(element1 => {
    adj.forEach(element2 => {
        noun.forEach(element3 => {
            domains.forEach(element4 => {
                console.log(element1 + element2 + element3 + element4);
            });
        });
    });
});