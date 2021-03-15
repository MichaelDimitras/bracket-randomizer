
const west = [
    [["NORF/APP", 16], ["Gonzaga", 1]],
    [["Missouri", 9], ["Oaklahoma", 8]],
    [["UCSB", 12], ["Creighton", 5]],
    [["Ohio", 9], ["Virginia", 8]],
    [["WICH/DRKE", 11], ["USC", 6]],
    [["Eastern Wash", 14], ["Kansas", 3]],
    [["VCU", 10], ["Oregon", 7]],
    [["Grand Canyon", 15], ["Iowa", 2]],
]

const east = [
    [["MSM/TXSO", 16], ["Michigan", 1]],
    [["St. Bonaventure", 9], ["LSU", 8]],
    [["Georgetown", 12], ["Colorado", 5]],
    [["N.C. Greensboro", 9], ["Florida St.", 8]],
    [["MSU/UCLA", 11], ["BYU", 6]],
    [["Abeline Christian", 14], ["Texas", 3]],
    [["Marayland", 10], ["Connecticut", 7]],
    [["Iona", 15], ["Alabama", 2]],
]

const south = [
    [["Hartford", 16], ["Baylor", 1]],
    [["Wisonsin", 9], ["North Carolina", 8]],
    [["Winthrop", 12], ["Villanova", 5]],
    [["North Texas", 9], ["Purdue", 8]],
    [["Utah St", 11], ["Texas Tech", 6]],
    [["Colgate", 14], ["Arkansas", 3]],
    [["Virginia Tech", 10], ["Florida", 7]],
    [["Oral Roberts", 15], ["Ohio St.", 2]],
]

const midwest = [
    [["Drexel", 16], ["Illinois", 1]],
    [["Gerogia Tech", 9], ["Loyola (IL)", 8]],
    [["Oregon St", 12], ["Tennessee", 5]],
    [["Liberty", 9], ["Oaklahoma", 8]],
    [["Syracuse", 11], ["SDSU", 6]],
    [["Morehead St.", 14], ["West Virginia", 3]],
    [["Rutgers", 10], ["Clemson", 7]],
    [["Cleveland St", 15], ["Houston", 2]],
]

module.exports = [].concat(west, east, south, midwest);