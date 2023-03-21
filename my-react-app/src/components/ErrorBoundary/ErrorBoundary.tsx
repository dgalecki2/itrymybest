import Button from "components/Button";
import Paragraph from "components/Paragraph";
import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";
import "./ErrorBoundary.scss";

export function ErrorBoundary({ children }: any) {
  return (
    <ReactErrorBoundary
      FallbackComponent={({ error, resetErrorBoundary }: any) => {
        return (
          <div className="errorBoundary__container">
            <Paragraph>An error occurred:</Paragraph>
            <blockquote className="errorBoundary__errorMessage">
              {error.message}
            </blockquote>
            <Button
              className="errorBoundary__tryAgainButton"
              onClick={resetErrorBoundary}
              text="Try again"
            />
          </div>
        );
      }}
      onError={({ message }: any, { componentStack }: any) => {
        console.error(message, componentStack);
      }}
    >
      {children}
    </ReactErrorBoundary>
  );
}
