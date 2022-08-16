import React, { useRef } from "react";

import styles from "./Modal.module.scss";

import close from "../../assets/images/icons/close.svg";

type ModalProps = {
	visible: boolean;
	title: string;
	children: React.ReactNode;
	resolveHandler?: (() => void) | null;
	rejectHandler?: (() => void) | null;
};

const Modal: React.FC<ModalProps> = ({
	visible,
	title,
	children,
	resolveHandler,
	rejectHandler,
}) => {
	const overlayRef = useRef(null);

	const onClickOverlay = (e: React.MouseEvent) => {
		if (e.target === overlayRef.current) {
			rejectHandler?.();
		}
	};

	return (
		<div
			className={
				visible
					? `${styles.modalOverlay} ${styles.visible}`
					: styles.modalOverlay
			}
			onClick={onClickOverlay}
			ref={overlayRef}
		>
			<div className={styles.modal}>
				<h1 className={styles.title}>{title}</h1>
				<div className={styles.children}>{children}</div>
				<div className={styles.buttons}>
					{rejectHandler ? (
						<button className={styles.rejectBtn} onClick={rejectHandler}>
							Cancel
						</button>
					) : null}

					{resolveHandler ? (
						<button className={styles.resolveBtn} onClick={resolveHandler}>
							OK
						</button>
					) : null}
				</div>
				<img
					src={close}
					alt=""
					onClick={rejectHandler ? rejectHandler : () => {}}
				/>
			</div>
		</div>
	);
};

export default Modal;
