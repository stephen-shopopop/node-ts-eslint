export function hello(name: string): string {
  return `hello ${name}`;
}

process.stdout.write(hello(" you"));
