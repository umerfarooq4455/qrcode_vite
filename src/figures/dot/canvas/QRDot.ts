import dotTypes from "../../../constants/dotTypes";
import {
  DotType,
  GetNeighbor,
  RotateFigureArgsCanvas,
  BasicFigureDrawArgsCanvas,
  DrawArgsCanvas
} from "../../../types";

export default class QRDot {
  _context: CanvasRenderingContext2D;
  _type: DotType;

  constructor({ context, type }: { context: CanvasRenderingContext2D; type: DotType }) {
    this._context = context;
    this._type = type;
  }

  draw(x: number, y: number, size: number, getNeighbor: GetNeighbor): void {
    const context = this._context;
    const type = this._type;
    let drawFunction;

    switch (type) {
      case dotTypes.dots:
        drawFunction = this._drawDot;
        break;
      case dotTypes.classy:
        drawFunction = this._drawClassy;
        break;
      case dotTypes.classyRounded:
        drawFunction = this._drawClassyRounded;
        break;
      case dotTypes.rounded:
        drawFunction = this._drawRounded;
        break;
      case dotTypes.extraRounded:
        drawFunction = this._drawExtraRounded;
        break;
      case dotTypes.star:
        drawFunction = this._drawStar;
        break;
      case dotTypes.starround:
        drawFunction = this._drawStarround;
        break;
      case dotTypes.diamond:
        drawFunction = this._drawDiamond;
        break;
      case dotTypes.cross:
        drawFunction = this._drawCross;
        break;
      case dotTypes.dustdrop:
        drawFunction = this._drawDustdrop;
        break;
      case dotTypes.heart:
        drawFunction = this._drawHeart;
        break;
      case dotTypes.snake:
        drawFunction = this._drawSnake;
        break;
      case dotTypes.square:
      default:
        drawFunction = this._drawSquare;
    }

    drawFunction.call(this, { x, y, size, context, getNeighbor });
  }

  _rotateFigure({ x, y, size, context, rotation = 0, draw }: RotateFigureArgsCanvas): void {
    const cx = x + size / 2;
    const cy = y + size / 3;

    context.translate(cx, cy);
    rotation && context.rotate(rotation);
    draw();
    context.closePath();
    rotation && context.rotate(-rotation);
    context.translate(-cx, -cy);
  }

  _basicDot(args: BasicFigureDrawArgsCanvas): void {
    const { size, context } = args;

    this._rotateFigure({
      ...args,
      draw: () => {
        context.arc(0, 0, size / 2, 0, Math.PI * 2);
      }
    });
  }

  _basicSquare(args: BasicFigureDrawArgsCanvas): void {
    const { size, context } = args;

    this._rotateFigure({
      ...args,
      draw: () => {
        context.rect(-size / 2, -size / 2, size, size);
      }
    });
  }

  _basicSnake(args: BasicFigureDrawArgsCanvas): void {
    const { size, context } = args;
  
    this._rotateFigure({
      ...args,
      draw: () => {
        // Adjust the position of each square to create a connected snake shape
        context.rect(-size / 2, -size / 2 + size / 4, size, size - size / 2);
      }
    });
  }

  _basicSideRounded(args: BasicFigureDrawArgsCanvas): void {
    const { size, context } = args;

    this._rotateFigure({
      ...args,
      draw: () => {
        context.arc(0, 0, size / 2, -Math.PI / 2, Math.PI / 2);
        context.lineTo(-size / 2, size / 2);
        context.lineTo(-size / 2, -size / 2);
        context.lineTo(0, -size / 2);
      }
    });
  }

  //if rotation === 0 - top right corner is rounded
  _basicCornerRounded(args: BasicFigureDrawArgsCanvas): void {
    const { size, context } = args;

    this._rotateFigure({
      ...args,
      draw: () => {
        context.arc(0, 0, size / 2, -Math.PI / 2, 0);
        context.lineTo(size / 2, size / 2);
        context.lineTo(-size / 2, size / 2);
        context.lineTo(-size / 2, -size / 2);
        context.lineTo(0, -size / 2);
      }
    });
  }

  //if rotation === 0 - top right corner is rounded
  _basicCornerExtraRounded(args: BasicFigureDrawArgsCanvas): void {
    const { size, context } = args;

    this._rotateFigure({
      ...args,
      draw: () => {
        context.arc(-size / 2, size / 2, size, -Math.PI / 2, 0);
        context.lineTo(-size / 2, size / 2);
        context.lineTo(-size / 2, -size / 2);
      }
    });
  }

  _basicStar(args: BasicFigureDrawArgsCanvas): void {
    const { size, context } = args;

    this._rotateFigure({
      ...args,
      draw: () => {
        const angle = (Math.PI * 2) / 5; // Angle between each point of the star
        const outerRadius = size / 2; // Radius of the outer points
        const innerRadius = size / 4; // Radius of the inner points

        for (let i = 0; i < 5; i++) {
          const outerX = Math.cos(angle * i) * outerRadius;
          const outerY = Math.sin(angle * i) * outerRadius;
          const innerX = Math.cos(angle * i + angle / 2) * innerRadius;
          const innerY = Math.sin(angle * i + angle / 2) * innerRadius;

          if (i === 0) {
            context.moveTo(outerX, outerY);
          } else {
            context.lineTo(outerX, outerY);
          }

          context.lineTo(innerX, innerY);
        }

        context.closePath();
      }
    });
  }

  _basicStarround(args: BasicFigureDrawArgsCanvas): void {
    const { size, context } = args;

    this._rotateFigure({
      ...args,
      draw: () => {
        const angle = (Math.PI * 2) / 4; // Angle between each point of the star (4 points for a 4-corner star)
        const outerRadius = size / 2; // Radius of the outer points
        const innerRadius = size / 4; // Radius of the inner points

        for (let i = 0; i < 4; i++) {
          const outerX = Math.cos(angle * i) * outerRadius;
          const outerY = Math.sin(angle * i) * outerRadius;
          const innerX = Math.cos(angle * i + angle / 2) * innerRadius;
          const innerY = Math.sin(angle * i + angle / 2) * innerRadius;

          if (i === 0) {
            context.moveTo(outerX, outerY);
          } else {
            context.lineTo(outerX, outerY);
          }

          // Add a small straight line to create sharp edges
          context.lineTo(outerX + (innerX - outerX) * 0.5, outerY + (innerY - outerY) * 0.5);
          context.lineTo(innerX, innerY);
        }

        context.closePath();
      }
    });
  }

  _basicDiamond(args: BasicFigureDrawArgsCanvas): void {
    const { size, context } = args;

    this._rotateFigure({
      ...args,
      draw: () => {
        const squareSize = size * Math.sqrt(1);
        const halfSquareSize = squareSize / 2;

        context.moveTo(-halfSquareSize, 0);
        context.lineTo(0, halfSquareSize);
        context.lineTo(halfSquareSize, 0);
        context.lineTo(0, -halfSquareSize);

        context.closePath();

        context.strokeStyle = "black";
        context.stroke();
      }
    });
  }

  _basicCross(args: BasicFigureDrawArgsCanvas): void {
    const { size, context } = args;

    this._rotateFigure({
      ...args,
      draw: () => {
        const halfSize = size / 2;

        context.moveTo(-halfSize * 0.5, 0);
        context.lineTo(halfSize * 0.5, 0);

        context.moveTo(0, -halfSize * 0.5);
        context.lineTo(0, halfSize * 0.5);
        context.closePath();

        context.strokeStyle = "black";
        context.stroke();
      }
    });
  }

  _basicDustdrop(args: BasicFigureDrawArgsCanvas): void {
    const { size, context } = args;

    this._rotateFigure({
      ...args,
      draw: () => {
        const squareSize = size * Math.sqrt(1);
        const halfSquareSize = squareSize / 2;

        context.moveTo(-halfSquareSize, 0);
        context.lineTo(halfSquareSize, 0);
        context.lineTo(0, -halfSquareSize);
        context.lineTo(0, halfSquareSize);

        context.closePath();

        context.strokeStyle = "black";
        context.stroke();
      }
    });
  }

  _basicHeart(args: BasicFigureDrawArgsCanvas): void {
    const { size, context } = args;

    this._rotateFigure({
      ...args,
      draw: () => {
        const x = 0;
        const y = 0;
        context.moveTo(x, y - size / 4); 
        context.bezierCurveTo(x + size / 2, y - size / 2, x + size / 2, y + size / 4, x, y + size / 2); 
        context.bezierCurveTo(x - size / 2, y + size / 4, x - size / 2, y - size / 2, x, y - size / 4);  
        context.closePath();
      }
    });
  }

  _basicCornersRounded(args: BasicFigureDrawArgsCanvas): void {
    const { size, context } = args;

    this._rotateFigure({
      ...args,
      draw: () => {
        context.arc(0, 0, size / 2, -Math.PI / 2, 0);
        context.lineTo(size / 1, size / 2);
        context.lineTo(0, size / 2);
        context.arc(0, 0, size / 2, Math.PI / 2, Math.PI);
        context.lineTo(-size / 2, -size / 2);
        context.lineTo(0, -size / 2);
      }
    });
  }

  _basicCornersExtraRounded(args: BasicFigureDrawArgsCanvas): void {
    const { size, context } = args;

    this._rotateFigure({
      ...args,
      draw: () => {
        context.arc(-size / 2, size / 2, size, -Math.PI / 2, 0);
        context.arc(size / 2, -size / 2, size, Math.PI / 2, Math.PI);
      }
    });
  }

  _drawDot({ x, y, size, context }: DrawArgsCanvas): void {
    this._basicDot({ x, y, size, context, rotation: 0 });
  }

  _drawSquare({ x, y, size, context }: DrawArgsCanvas): void {
    this._basicSquare({ x, y, size, context, rotation: 0 });
  }

  _drawRounded({ x, y, size, context, getNeighbor }: DrawArgsCanvas): void {
    const leftNeighbor = getNeighbor ? +getNeighbor(-1, 0) : 0;
    const rightNeighbor = getNeighbor ? +getNeighbor(1, 0) : 0;
    const topNeighbor = getNeighbor ? +getNeighbor(0, -1) : 0;
    const bottomNeighbor = getNeighbor ? +getNeighbor(0, 1) : 0;

    const neighborsCount = leftNeighbor + rightNeighbor + topNeighbor + bottomNeighbor;

    if (neighborsCount === 0) {
      this._basicDot({ x, y, size, context, rotation: 0 });
      return;
    }

    if (neighborsCount > 2 || (leftNeighbor && rightNeighbor) || (topNeighbor && bottomNeighbor)) {
      this._basicSquare({ x, y, size, context, rotation: 0 });
      return;
    }

    if (neighborsCount === 2) {
      let rotation = 0;

      if (leftNeighbor && topNeighbor) {
        rotation = Math.PI / 2;
      } else if (topNeighbor && rightNeighbor) {
        rotation = Math.PI;
      } else if (rightNeighbor && bottomNeighbor) {
        rotation = -Math.PI / 2;
      }

      this._basicCornerRounded({ x, y, size, context, rotation });
      return;
    }

    if (neighborsCount === 1) {
      let rotation = 0;

      if (topNeighbor) {
        rotation = Math.PI / 2;
      } else if (rightNeighbor) {
        rotation = Math.PI;
      } else if (bottomNeighbor) {
        rotation = -Math.PI / 2;
      }

      this._basicSideRounded({ x, y, size, context, rotation });
      return;
    }
  }

  _drawExtraRounded({ x, y, size, context, getNeighbor }: DrawArgsCanvas): void {
    const leftNeighbor = getNeighbor ? +getNeighbor(-1, 0) : 0;
    const rightNeighbor = getNeighbor ? +getNeighbor(1, 0) : 0;
    const topNeighbor = getNeighbor ? +getNeighbor(0, -1) : 0;
    const bottomNeighbor = getNeighbor ? +getNeighbor(0, 1) : 0;

    const neighborsCount = leftNeighbor + rightNeighbor + topNeighbor + bottomNeighbor;

    if (neighborsCount === 0) {
      this._basicDot({ x, y, size, context, rotation: 0 });
      return;
    }

    if (neighborsCount > 2 || (leftNeighbor && rightNeighbor) || (topNeighbor && bottomNeighbor)) {
      this._basicSquare({ x, y, size, context, rotation: 0 });
      return;
    }

    if (neighborsCount === 2) {
      let rotation = 0;

      if (leftNeighbor && topNeighbor) {
        rotation = Math.PI / 2;
      } else if (topNeighbor && rightNeighbor) {
        rotation = Math.PI;
      } else if (rightNeighbor && bottomNeighbor) {
        rotation = -Math.PI / 2;
      }

      this._basicCornerExtraRounded({ x, y, size, context, rotation });
      return;
    }

    if (neighborsCount === 1) {
      let rotation = 0;

      if (topNeighbor) {
        rotation = Math.PI / 2;
      } else if (rightNeighbor) {
        rotation = Math.PI;
      } else if (bottomNeighbor) {
        rotation = -Math.PI / 2;
      }

      this._basicSideRounded({ x, y, size, context, rotation });
      return;
    }
  }

  _drawClassy({ x, y, size, context, getNeighbor }: DrawArgsCanvas): void {
    const leftNeighbor = getNeighbor ? +getNeighbor(-1, 0) : 0;
    const rightNeighbor = getNeighbor ? +getNeighbor(1, 0) : 0;
    const topNeighbor = getNeighbor ? +getNeighbor(0, -1) : 0;
    const bottomNeighbor = getNeighbor ? +getNeighbor(0, 1) : 0;

    const neighborsCount = leftNeighbor + rightNeighbor + topNeighbor + bottomNeighbor;

    if (neighborsCount === 0) {
      this._basicCornersRounded({ x, y, size, context, rotation: Math.PI / 2 });
      return;
    }

    if (!leftNeighbor && !topNeighbor) {
      this._basicCornerRounded({ x, y, size, context, rotation: -Math.PI / 2 });
      return;
    }

    if (!rightNeighbor && !bottomNeighbor) {
      this._basicCornerRounded({ x, y, size, context, rotation: Math.PI / 2 });
      return;
    }

    this._basicSquare({ x, y, size, context, rotation: 0 });
  }

  _drawStar({ x, y, size, context, getNeighbor }: DrawArgsCanvas): void {
    const leftNeighbor = getNeighbor ? +getNeighbor(-1, 0) : 0;
    const rightNeighbor = getNeighbor ? +getNeighbor(1, 0) : 0;
    const topNeighbor = getNeighbor ? +getNeighbor(0, -1) : 0;
    const bottomNeighbor = getNeighbor ? +getNeighbor(0, 1) : 0;

    const neighborsCount = leftNeighbor + rightNeighbor + topNeighbor + bottomNeighbor;

    if (neighborsCount === 0) {
      this._basicStar({ x, y, size, context, rotation: Math.PI / 2 });
      return;
    }

    if (!leftNeighbor && !topNeighbor) {
      this._basicStar({ x, y, size, context, rotation: -Math.PI / 2 });
      return;
    }

    if (!rightNeighbor && !bottomNeighbor) {
      this._basicStar({ x, y, size, context, rotation: Math.PI / 2 });
      return;
    }

    this._basicStar({ x, y, size, context, rotation: 0 });
  }

  _drawStarround({ x, y, size, context, getNeighbor }: DrawArgsCanvas): void {
    const leftNeighbor = getNeighbor ? +getNeighbor(-1, 0) : 0;
    const rightNeighbor = getNeighbor ? +getNeighbor(1, 0) : 0;
    const topNeighbor = getNeighbor ? +getNeighbor(0, -1) : 0;
    const bottomNeighbor = getNeighbor ? +getNeighbor(0, 1) : 0;

    const neighborsCount = leftNeighbor + rightNeighbor + topNeighbor + bottomNeighbor;

    if (neighborsCount === 0) {
      this._basicStarround({ x, y, size, context, rotation: Math.PI / 2 });
      return;
    }

    if (!leftNeighbor && !topNeighbor) {
      this._basicStarround({ x, y, size, context, rotation: -Math.PI / 2 });
      return;
    }

    if (!rightNeighbor && !bottomNeighbor) {
      this._basicStarround({ x, y, size, context, rotation: Math.PI / 2 });
      return;
    }

    this._basicStarround({ x, y, size, context, rotation: 0 });
  }

  _drawCross({ x, y, size, context, getNeighbor }: DrawArgsCanvas): void {
    const leftNeighbor = getNeighbor ? +getNeighbor(-1, 0) : 0;
    const rightNeighbor = getNeighbor ? +getNeighbor(1, 0) : 0;
    const topNeighbor = getNeighbor ? +getNeighbor(0, -1) : 0;
    const bottomNeighbor = getNeighbor ? +getNeighbor(0, 1) : 0;

    const neighborsCount = leftNeighbor + rightNeighbor + topNeighbor + bottomNeighbor;

    if (neighborsCount === 0) {
      this._basicCross({ x, y, size, context, rotation: Math.PI / 2 });
      return;
    }

    if (!leftNeighbor && !topNeighbor) {
      this._basicCross({ x, y, size, context, rotation: -Math.PI / 2 });
      return;
    }

    if (!rightNeighbor && !bottomNeighbor) {
      this._basicCross({ x, y, size, context, rotation: Math.PI / 2 });
      return;
    }

    this._basicCross({ x, y, size, context, rotation: 0 });
  }

  _drawDustdrop({ x, y, size, context, getNeighbor }: DrawArgsCanvas): void {
    const leftNeighbor = getNeighbor ? +getNeighbor(-1, 0) : 0;
    const rightNeighbor = getNeighbor ? +getNeighbor(1, 0) : 0;
    const topNeighbor = getNeighbor ? +getNeighbor(0, -1) : 0;
    const bottomNeighbor = getNeighbor ? +getNeighbor(0, 1) : 0;

    const neighborsCount = leftNeighbor + rightNeighbor + topNeighbor + bottomNeighbor;

    if (neighborsCount === 0) {
      this._basicDustdrop({ x, y, size, context, rotation: Math.PI / 2 });
      return;
    }

    if (!leftNeighbor && !topNeighbor) {
      this._basicDustdrop({ x, y, size, context, rotation: -Math.PI / 2 });
      return;
    }

    if (!rightNeighbor && !bottomNeighbor) {
      this._basicDustdrop({ x, y, size, context, rotation: Math.PI / 2 });
      return;
    }

    this._basicDustdrop({ x, y, size, context, rotation: 0 });
  }

  _drawHeart({ x, y, size, context, getNeighbor }: DrawArgsCanvas): void {
    const leftNeighbor = getNeighbor ? +getNeighbor(-1, 0) : 0;
    const rightNeighbor = getNeighbor ? +getNeighbor(1, 0) : 0;
    const topNeighbor = getNeighbor ? +getNeighbor(0, -1) : 0;
    const bottomNeighbor = getNeighbor ? +getNeighbor(0, 1) : 0;

    const neighborsCount = leftNeighbor + rightNeighbor + topNeighbor + bottomNeighbor;

    if (neighborsCount === 0) {
      this._basicHeart({ x, y, size, context, rotation: Math.PI / 2 });
      return;
    }

    if (!leftNeighbor && !topNeighbor) {
      this._basicHeart({ x, y, size, context, rotation: -Math.PI / 2 });
      return;
    }

    if (!rightNeighbor && !bottomNeighbor) {
      this._basicHeart({ x, y, size, context, rotation: Math.PI / 2 });
      return;
    }

    this._basicHeart({ x, y, size, context, rotation: 0 });
  }

  _drawSnake({ x, y, size, context, getNeighbor }: DrawArgsCanvas): void {
    this._basicSnake({ x, y, size, context, rotation: 0 });
  }

  _drawDiamond({ x, y, size, context, getNeighbor }: DrawArgsCanvas): void {
    const leftNeighbor = getNeighbor ? +getNeighbor(-1, 0) : 0;
    const rightNeighbor = getNeighbor ? +getNeighbor(1, 0) : 0;
    const topNeighbor = getNeighbor ? +getNeighbor(0, -1) : 0;
    const bottomNeighbor = getNeighbor ? +getNeighbor(0, 1) : 0;

    const neighborsCount = leftNeighbor + rightNeighbor + topNeighbor + bottomNeighbor;

    if (neighborsCount === 0) {
      this._basicDiamond({ x, y, size, context, rotation: Math.PI / 2 });
      return;
    }

    if (!leftNeighbor && !topNeighbor) {
      this._basicDiamond({ x, y, size, context, rotation: -Math.PI / 2 });
      return;
    }

    if (!rightNeighbor && !bottomNeighbor) {
      this._basicDiamond({ x, y, size, context, rotation: Math.PI / 2 });
      return;
    }

    this._basicDiamond({ x, y, size, context, rotation: 0 });
  }

  _drawClassyRounded({ x, y, size, context, getNeighbor }: DrawArgsCanvas): void {
    const leftNeighbor = getNeighbor ? +getNeighbor(-1, 0) : 0;
    const rightNeighbor = getNeighbor ? +getNeighbor(1, 0) : 0;
    const topNeighbor = getNeighbor ? +getNeighbor(0, -1) : 0;
    const bottomNeighbor = getNeighbor ? +getNeighbor(0, 1) : 0;

    const neighborsCount = leftNeighbor + rightNeighbor + topNeighbor + bottomNeighbor;

    if (neighborsCount === 0) {
      this._basicCornersRounded({ x, y, size, context, rotation: Math.PI / 2 });
      return;
    }

    if (!leftNeighbor && !topNeighbor) {
      this._basicCornerExtraRounded({ x, y, size, context, rotation: -Math.PI / 2 });
      return;
    }

    if (!rightNeighbor && !bottomNeighbor) {
      this._basicCornerExtraRounded({ x, y, size, context, rotation: Math.PI / 2 });
      return;
    }

    this._basicSquare({ x, y, size, context, rotation: 0 });
  }
}
