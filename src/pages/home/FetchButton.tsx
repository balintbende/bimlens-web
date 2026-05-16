type Props = {
  file: File | null;
};

export default function FetchButton({ file }: Props) {
  const disabled = !file;

  const handleClick = () => {
    if (!file) return;
    // API integration will be added later (bimlens-api).
    console.log('Fetch clicked', file.name);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={disabled}
      className="rounded-md bg-primary px-6 py-2 text-white font-medium shadow-sm hover:bg-primary/90 disabled:bg-gray-300 disabled:cursor-not-allowed"
    >
      Fetch
    </button>
  );
}
