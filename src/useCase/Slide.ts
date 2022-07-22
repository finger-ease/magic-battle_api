export class Slide {
  private static _slide: number = 0;

  public static init(): void {
    Slide._slide = 0;
  }

  public static increment(): number {
    if (Slide._slide > 15) Slide.init();
    return Slide._slide++;
  }
}
