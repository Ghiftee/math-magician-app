import Calculator from '../components/Calculator';

export default function CalcPage() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '20px',
      }}
    >
      <div>
        <h4>Let&apos;s do some math!</h4>
      </div>
      <Calculator />
    </div>
  );
}
