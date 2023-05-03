nounArray = ["The deer", "The armadillo", "Vikram", "The lion", "The whale", "The beaver", "The pigeon", "The sea lion", "The mouse", "The jackal"]
verbArray = ["watched", "presumed", "cut", "arrested", "funded", "signaled", "covered", "played", "proposed", "smirked"]
descriptionArray = ["in the blink of an eye", "at a snail's pace", "in a studious and polite manner", "protectively", "almost silently", "pretty loudly, disturbing the nearby zebras", "in a rather adventurous way", "without any hesitation", "with great attention to detial"]

function makeMixedMessage() {
  const noun = nounArray[Math.floor(Math.rand()*10)];
  const verb = verbArray[Math.floor(Math.rand()*10)];
  const description = descriptionArray[Math.floor(Math.rand()*10)];
  console.log(`${noun} ${verb} ${description}.`);
};

makeMixedMessage();