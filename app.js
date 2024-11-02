const pronouns = ['el', 'los'];
const adjectives = ['agua', 'mesa'];
const nouns = ['animales', 'djs'];
const domains = ['.cl', '.com'];

pronouns.forEach(pronoun => {
    adjectives.forEach(adjective => {
        nouns.forEach(noun => {
            domains.forEach(domain => {
                console.log(`${pronoun}${adjective}${noun}${domain}`);
            });
        });
    });
});
