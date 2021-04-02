import styled from 'styled-components';

export const Container = styled.div`
  display: grid; // grid because it has same components
  grid-template-columns: repeat(3, 1fr); // 3 columns with the same length
  gap: 2rem; // space between each component
  margin-top: -10rem;

  div {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block; // by default, strong tag come with inline and because of it, margin-top doesn't work
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &.highlight-background {
      background: var(--green);
      color: #fff;
    }
  }

`;
