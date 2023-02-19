// const props = {
//   slug: 'primer-blog',
//   title: 'Hola este e sun titulo de un blog',
//   date: 'Sun Feb 19 2023 11:46:52 GMT-0400 (Venezuela Time)',
// };

export default function getSlug(props: {
  slug: string;
  title: string;
  date: string;
}): string {
  return props.slug;
}
// console.log(new Date());
