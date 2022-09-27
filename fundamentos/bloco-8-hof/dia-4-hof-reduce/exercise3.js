const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  const expectedResult = 20;
  
  function containsA() {
    let as = 0;
    names.forEach((name) => {
        const letras = name.split('');
        as += letras.reduce((acc, curr) => {
            if(curr.toLowerCase() === 'a') {
                return acc + 1;
            }
            return acc;
        }, 0)
    })
    return as;
  }

  console.log(containsA());