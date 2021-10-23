function toRoman(num) {
    const romanos  = [
      [1000, 'M'],
      [900, 'CM'],
      [500, 'D'],
      [400, 'CD'],
      [100, 'C'],
      [90, 'XC'],
      [50, 'L'],
      [40, 'XL'],
      [10, 'X'],
      [9, 'IX'],
      [5, 'V'],
      [4, 'IV'],
      [1, 'I']
    ];

    let resultado = '';
    romanos.forEach(dupla => {
      let div = Math.floor(num / dupla[0]);
      num = num % dupla[0];
      for (let i = div; i > 0; i--) {
        resultado += dupla[1]
      }
    });
    
    return resultado;
};

// Testes
function test(valor, esperado) {
  resultado = toRoman(valor);
  if (resultado == esperado) {
    console.log(`✓ Teste ${valor} correto`);
  } else {
    console.log(`✗ Teste ${valor} incorreto. Esperado ${esperado}, obtido ${resultado}`);
  };
};

test(1, "I")
test(2, "II")
test(3, "III")
test(4, "IV")
test(5, "V")
test(6, "VI")
test(7, "VII")
test(8, "VIII")
test(9, "IX")
test(10, "X")
test(12, "XII")
test(15, "XV")
test(18, "XVIII")
test(19, "XIX")
test(29, "XXIX")
test(38, "XXXVIII")
test(47, "XLVII")
test(56, "LVI")
test(65, "LXV")
test(74, "LXXIV")
test(83, "LXXXIII")
test(90, "XC")
test(92, "XCII")
test(100, "C")
test(110, "CX")
test(200, "CC")
test(220, "CCXX")
test(300, "CCC")
test(330, "CCCXXX")
test(400, "CD")
test(440, "CDXL")
test(500, "D")
test(550, "DL")
test(600, "DC")
test(660, "DCLX")
test(700, "DCC")
test(770, "DCCLXX")
test(800, "DCCC")
test(880, "DCCCLXXX")
test(900, "CM")
test(990, "CMXC")
test(1000, "M")