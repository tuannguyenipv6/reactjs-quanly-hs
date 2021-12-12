import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Card } from "@material-ui/core";
import React from "react";
import useStyles from './styles';
import { student$, bangDiem$ } from '../../../../../redux/selectors';
import { useSelector } from "react-redux";
import ItemBangDiem from "./ItemBangDiem";

function BangDiem() {

    const classes = useStyles();
    const student = useSelector(student$);
    const bangDiem = useSelector(bangDiem$);

    return (
        <Card className={classes.card}>
            <h1 className={classes.title}>BẢNG ĐIỂM HỌC SINH</h1>

            <div className={classes.wrapperInfo}>
                <div className={classes.infoLeft}>
                    <div className={classes.item}>
                        <h3 className={classes.itemInfo0}>Họ Tên:</h3>
                        <h3 className={classes.itemInfo}>{student.mHoTen}</h3>
                    </div>

                    <div className={classes.item}>
                        <h3 className={classes.itemInfo0}>Mã Số H/S:</h3>
                        <h3 className={classes.itemInfo}>{student.mMSHS}</h3>
                    </div>
                </div>

                <div className={classes.infoRight}>
                    <div className={classes.item}>
                        <h3 className={classes.itemInfo0}>Chức Vụ:</h3>
                        <h3 className={classes.itemInfo}>{student.mChucVu}</h3>
                    </div>

                    <div className={classes.item}>
                        <h3 className={classes.itemInfo0}>SDT P/H:</h3>
                        <h3 className={classes.itemInfo}>{student.mSDT}</h3>
                    </div>
                </div>
            </div>

            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead className={classes.tableTableHead}>
                    <TableRow>
                        <TableCell className={classes.colorTableHead}>Tên Môn Học</TableCell>
                        <TableCell className={classes.colorTableHead} align="right">Điểm miệng</TableCell>
                        <TableCell className={classes.colorTableHead} align="right">Điểm 15p</TableCell>
                        <TableCell className={classes.colorTableHead} align="right">Điểm 1 tiết</TableCell>
                        <TableCell className={classes.colorTableHead} align="right">Điểm học kỳ</TableCell>
                        <TableCell className={classes.colorTableHead} align="right">Điểm TB</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {bangDiem.listSubject.map((MonHoc , indexMonHoc) => (
                            <ItemBangDiem key={MonHoc.dID} MonHoc={MonHoc} indexMonHoc={indexMonHoc} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Card>
    )
}

export default BangDiem;