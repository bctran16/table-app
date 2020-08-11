const dateGen = () => {
    const start = new Date(2010,0,1);
    const end = new Date();
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return [date.getMonth()+1, date.getDate(), date.getFullYear()].join('/');
}
export default dateGen;

