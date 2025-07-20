function InfoCard({
  label,
  amount = 0,
  setAmount,
  finalAmount = 0,
  currency = "pkr",
  setCurrency,
  SelectedCurrency = "usd",
  setSelectedCurrency,
  options = []
}) {
  const handleCurrencyChange = (e) => {
    if (label === "from") {
      setCurrency(e.target.value);
    } else {
      setSelectedCurrency(e.target.value);
    }
  };

  return (
    <>
      <label>{label}</label>

      <input
        type="text"
        placeholder={label === "from" ? "Enter your amount here:" : "Final Amount here:"}
        value={label === "from" ? amount : finalAmount}
        onChange={label === "from" ? (e) => setAmount(e.target.value) : undefined}
        readOnly={label !== "from"}
      />

      <select
        name={label}
        value={label === "from" ? currency : SelectedCurrency}
        onChange={handleCurrencyChange}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option.toUpperCase()}
          </option>
        ))}
      </select>
    </>
  );
}

export default InfoCard;
