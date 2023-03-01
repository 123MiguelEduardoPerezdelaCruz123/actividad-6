function daysInBudget(Presupuesto, Dias)
{
    const HorasTotal = Dias * 8;

    const DiasTotales = Math.floor(Presupuesto / HorasTotal);
    return DiasTotales;
}

alert(daysInBudget(20000, 89));