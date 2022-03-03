const fatorial = (number) => {
  return number > 0 ? number * fatorial(number - 1) : 1;
}

