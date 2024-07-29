import { useInsertionEffect, useMemo } from 'react';

// 스타일 캐시를 관리하기 위한 Set
const insertedStyles = new Set();

// CSS 규칙을 생성하고 주입하는 함수
const useStyle = (cssRules) => {
  const code = useMemo(() => hashCode(cssRules), [cssRules]);

  useInsertionEffect(() => {
    if (!insertedStyles.has(cssRules)) {
      insertedStyles.add(cssRules);
      const style = document.createElement('style');
      style.textContent = `.css-${code}{${cssRules}}`;
      document.head.appendChild(style);
    }
  }, [cssRules]);

  // CSS 클래스 이름 생성 (간단한 해시 함수 사용)
  const className = `css-${code}`;
  return className;
};

// 간단한 해시 함수
const hashCode = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash).toString(36);
};

// 예제 컴포넌트
const StyledButton = ({ children, primary }) => {
  const className = useStyle(`
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
      border: none;
      border-radius: 4px;
      ${primary ? 'background-color: #007bff; color: white;' : 'background-color: #f8f9fa; color: #343a40;'}
  `);

  return (
    <button className={className}>
      {children}
    </button>
  );
};

// 사용 예
const App = () => {
  return (
    <div>
      <StyledButton primary>Primary Button</StyledButton>
      <StyledButton>Secondary Button</StyledButton>
    </div>
  );
};

export default App;