import Button from "components/Button";
import Paragraph from "components/Paragraph";
import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";
import { ErrorBoundaryInterface } from "./ErrorBoundary.interface";
import "./ErrorBoundary.scss";

export function ErrorBoundary({ children }: ErrorBoundaryInterface) {
  return (
    <ReactErrorBoundary
      FallbackComponent={({ error, resetErrorBoundary }) => {
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
      onError={({ message }, { componentStack }) => {
        console.error(message, componentStack);
      }}
    >
      {children}
    </ReactErrorBoundary>
  );
}
