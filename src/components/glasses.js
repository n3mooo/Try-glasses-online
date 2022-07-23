import React, { Component } from "react";
import styles from "./glasses.module.css";
import model from "./../assets/model.png";
import v1 from "./../assets/v1.png";
import v2 from "./../assets/v2.png";
import v3 from "./../assets/v3.png";
import v4 from "./../assets/v4.png";
import v5 from "./../assets/v5.png";
import v6 from "./../assets/v6.png";
import v7 from "./../assets/v7.png";
import v8 from "./../assets/v8.png";
import v9 from "./../assets/v9.png";
import clsx from "clsx";

export class Glasses extends Component {
    state = { glassesImg: v1 };

    changeImg = (img) => {
        this.setState(
            {
                glassesImg: img,
            },
            () => {
                console.log(this.state.glassesImg);
            }
        );
    };

    render() {
        return (
            <div className={clsx(styles.bg)}>
                <div className={clsx(styles.main)}>
                    <h1 className={clsx(styles.title)}>
                        Try Glasses App Online
                    </h1>
                    <div className={clsx(styles.content)}>
                        <div className={clsx(styles.face)}>
                            <div className="position-relative text-start">
                                <img
                                    src={model}
                                    alt="model"
                                    className="w-75 mt-5 "
                                />
                                <img
                                    src={this.state.glassesImg}
                                    alt=""
                                    className={clsx(styles.glassOfModel)}
                                />
                            </div>
                        </div>
                        <div className={clsx(styles.product)}>
                            <div className="row g-5 mt-4">
                                <div className="col-4">
                                    <button
                                        type="button"
                                        className={clsx(styles.btnProduct, {
                                            [styles.btnActive]:
                                                this.state.glassesImg === v1,
                                        })}
                                        onClick={() => this.changeImg(v1)}
                                    >
                                        <img
                                            src={v1}
                                            alt=""
                                            className="w-100"
                                        />
                                    </button>
                                </div>
                                <div className="col-4">
                                    <button
                                        type="button"
                                        className={clsx(styles.btnProduct, {
                                            [styles.btnActive]:
                                                this.state.glassesImg === v2,
                                        })}
                                        onClick={() => this.changeImg(v2)}
                                    >
                                        <img
                                            src={v2}
                                            alt=""
                                            className="w-100"
                                        />
                                    </button>
                                </div>
                                <div className="col-4">
                                    <button
                                        type="button"
                                        className={clsx(styles.btnProduct, {
                                            [styles.btnActive]:
                                                this.state.glassesImg === v3,
                                        })}
                                        onClick={() => this.changeImg(v3)}
                                    >
                                        <img
                                            src={v3}
                                            alt=""
                                            className="w-100"
                                        />
                                    </button>
                                </div>
                                <div className="col-4">
                                    <button
                                        type="button"
                                        className={clsx(styles.btnProduct, {
                                            [styles.btnActive]:
                                                this.state.glassesImg === v4,
                                        })}
                                        onClick={() => this.changeImg(v4)}
                                    >
                                        <img
                                            src={v4}
                                            alt=""
                                            className="w-100"
                                        />
                                    </button>
                                </div>
                                <div className="col-4">
                                    <button
                                        type="button"
                                        className={clsx(styles.btnProduct, {
                                            [styles.btnActive]:
                                                this.state.glassesImg === v5,
                                        })}
                                        onClick={() => this.changeImg(v5)}
                                    >
                                        <img
                                            src={v5}
                                            alt=""
                                            className="w-100"
                                        />
                                    </button>
                                </div>
                                <div className="col-4">
                                    <button
                                        type="button"
                                        className={clsx(styles.btnProduct, {
                                            [styles.btnActive]:
                                                this.state.glassesImg === v6,
                                        })}
                                        onClick={() => this.changeImg(v6)}
                                    >
                                        <img
                                            src={v6}
                                            alt=""
                                            className="w-100"
                                        />
                                    </button>
                                </div>
                                <div className="col-4">
                                    <button
                                        type="button"
                                        className={clsx(styles.btnProduct, {
                                            [styles.btnActive]:
                                                this.state.glassesImg === v7,
                                        })}
                                        onClick={() => this.changeImg(v7)}
                                    >
                                        <img
                                            src={v7}
                                            alt=""
                                            className="w-100"
                                        />
                                    </button>
                                </div>
                                <div className="col-4">
                                    <button
                                        type="button"
                                        className={clsx(styles.btnProduct, {
                                            [styles.btnActive]:
                                                this.state.glassesImg === v8,
                                        })}
                                        onClick={() => this.changeImg(v8)}
                                    >
                                        <img
                                            src={v8}
                                            alt=""
                                            className="w-100"
                                        />
                                    </button>
                                </div>
                                <div className="col-4">
                                    <button
                                        type="button"
                                        className={clsx(styles.btnProduct, {
                                            [styles.btnActive]:
                                                this.state.glassesImg === v9,
                                        })}
                                        onClick={() => this.changeImg(v9)}
                                    >
                                        <img
                                            src={v9}
                                            alt=""
                                            className="w-100"
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Glasses;
