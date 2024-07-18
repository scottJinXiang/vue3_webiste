interface CellColors {
    [key: number]: string;
}

export const cellColors: CellColors = {
    1: "#007B6C",
    2: "#D18B00",
    3: "#C75D00",
    4: "#0044CC",
    5: "#CC0000",
    6: "#CCCC00",
    7: "#008B8B",
    8: "#8B008B",
};

export type SectionGrid = number[][];

export const sectionGrid: SectionGrid = [
    [1, 1, 2, 2, 2, 3, 3, 3],
    [1, 1, 2, 2, 2, 3, 3, 3],
    [4, 1, 2, 2, 2, 3, 3, 3],
    [4, 1, 5, 5, 5, 5, 3, 3],
    [4, 1, 5, 5, 5, 5, 6, 6],
    [4, 5, 5, 7, 7, 6, 6, 6],
    [4, 8, 7, 7, 7, 6, 6, 6],
    [8, 8, 8, 7, 7, 6, 6, 6]
  ];