export default function Logo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <div style={{
        width: '36px',
        height: '36px',
        background: 'linear-gradient(135deg, #68389a 0%, #f813a1 100%)',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}>
        <span style={{ color: '#ffffff', fontWeight: 800, fontSize: '14px', letterSpacing: '-0.5px' }}>FC</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
        <span style={{ fontWeight: 800, fontSize: '15px', color: 'var(--theme-elevation-1000)', letterSpacing: '-0.2px' }}>
          Funky Clicks
        </span>
        <span style={{ fontSize: '10px', color: 'var(--theme-elevation-500)', letterSpacing: '0.8px', textTransform: 'uppercase' }}>
          Admin
        </span>
      </div>
    </div>
  )
}
