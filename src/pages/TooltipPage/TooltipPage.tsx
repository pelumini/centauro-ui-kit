import React from 'react';
import { Tooltip } from 'ui-kit';
import './TooltipPage.scss';

export const TooltipPage: React.FC = () => {
  const renderTooltipContent = () => {
    return <span>This is tooltip!</span>;
  };

  return (
    <section className="TooltipPage">
      <div className="TooltipPage-Block">
        <h2>Default tooltip on hover</h2>
        <Tooltip content={renderTooltipContent()} placement="right">
          Hover me
        </Tooltip>
      </div>

      <div className="TooltipPage-Block">
        <h2>Tooltip is clickable</h2>
        <Tooltip
          behavior="click"
          content={renderTooltipContent()}
          placement="top"
        >
          <div>Click me</div>
        </Tooltip>
      </div>

      <div className="TooltipPage-Block">
        <h2>Tooltip is focusable</h2>
        <Tooltip
          behavior="focus"
          content={renderTooltipContent()}
          placement="bottom"
        >
          <div>Focus me</div>
        </Tooltip>
      </div>
    </section>
  );
};
