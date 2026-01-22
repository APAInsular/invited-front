import { useState, useEffect } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import apiClient from '../config/axiosConfig';
import Swal from 'sweetalert2'
import { span } from "framer-motion/client";
import usePageTranslation from "../hooks/usePageTranslation";

import NewWeddingForm from './../components/NewWeddingForm/NewWeddingForm';

export default function MakeInvitationForm() {
    return (<NewWeddingForm/>);
}
